package MySQL;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import dao.DAOException;
import dao.DAOFactory;
import dao.SgodaDAO;


public class MySQLDAOFactory extends DAOFactory {	

	private static MySQLDAOFactory singleton;	

	private Connection conn;
	private static String DRIVER_NAME;
    private static String IP_ADDRESS;
    private static String DB_NAME;
    private static String USERNAME;
    private static String PASSWORD;	

	private MySQLDAOFactory(String driver,String ipAddress, String dbName, String userName, String password) throws DAOException {

		this.DRIVER_NAME = driver;
		this.IP_ADDRESS = ipAddress;
		this.DB_NAME = dbName;
		this.USERNAME = userName;
		this.PASSWORD = password;	

        loadDriver();

        try {
        	String url = "jdbc:mysql://" + IP_ADDRESS + "/" + DB_NAME + "?zeroDateTimeBehavior=convertToNull";
        	this.conn = DriverManager.getConnection(url,USERNAME, PASSWORD);
        } catch (SQLException sqle) {
            throw new DAOException(sqle);
        }
	}	

	private MySQLDAOFactory(Connection conn) {	
		this.conn = conn;
		
	}

	private static void loadDriver() throws DAOException {
        try {
            Class.forName(DRIVER_NAME).newInstance();
        } catch (ClassNotFoundException e) {
            throw new DAOException(e);
        } catch (InstantiationException e) {
            throw new DAOException(e);
        } catch (IllegalAccessException e) {
            throw new DAOException(e);
        }

    }	

	public static MySQLDAOFactory getInstance(String driver,String ipAddress, String dbName, String userName, String password) throws DAOException {
		try{
	        if (singleton == null){
	            singleton = new MySQLDAOFactory( driver, ipAddress,  dbName,  userName, password);
	        }else if( singleton.conn.isClosed() ||  !singleton.conn.isValid(0) )  {
				singleton = new MySQLDAOFactory( driver, ipAddress,  dbName,  userName, password);
			}
		}catch(SQLException e){
			throw new DAOException(e);
		}
		
        return singleton;
    }
	
	public static MySQLDAOFactory getInstance(Connection conn) throws DAOException{		
		try{
			if ( singleton == null  ){
	            singleton = new MySQLDAOFactory(conn);
			}else if( singleton.conn.isClosed() ||  !singleton.conn.isValid(0) )  {
				singleton = new MySQLDAOFactory(conn);
			}
		}catch(SQLException e){
			throw new DAOException(e);
		}
		
        return singleton;
	}

	@Override
	public Connection getConexion() {
		// TODO Auto-generated method stub
		return conn;
	}
	
	

	@Override
	public SgodaDAO getSgdaoDAO() {
		// TODO Auto-generated method stub
		return new MySQLSgodaDAO(conn);
	}
	
}