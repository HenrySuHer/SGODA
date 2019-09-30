package MySQL;

import java.util.ArrayList;
import java.util.List;

import dao.SgodaDAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class MySQLSgodaDAO extends SgodaDAO{
	
	private Connection conn;
	
	public MySQLSgodaDAO(Connection conn) {
		this.conn = conn;
	}
	
	
	

}
