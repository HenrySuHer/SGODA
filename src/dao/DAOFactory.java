package dao;
import java.sql.Connection;

import MySQL.MySQLDAOFactory;

public abstract class DAOFactory {
	public static final int MYSQL = 1;
	public static final int SQLSERVER = 2;
	public static final int ORACLE = 3;
	public static final int DB2 = 4;
	public static final int MARIADB = 5;
	
	public abstract Connection getConexion();
	public abstract SgodaDAO getSgdaoDAO();
	
	
	public final static DAOFactory getDAOFactory( int type, String driver,String ipAddress, String dbName, String userName, String password ) 
    throws DAOException {
    	switch (type) {
            case MYSQL:
                return MySQLDAOFactory.getInstance(driver, ipAddress, dbName, userName, password);
            default:
                return MySQLDAOFactory.getInstance(driver, ipAddress, dbName, userName, password);
        }
    }
	
	public final static DAOFactory getDAOFactory(int type, Connection conn) throws DAOException {
    	switch (type) {
            case MYSQL:
                return MySQLDAOFactory.getInstance(conn);
            default:
                return MySQLDAOFactory.getInstance(conn);
        }
    }
}
