package controlador;

import java.sql.SQLException;
import java.util.Map;

import javax.servlet.ServletContext;

import org.apache.struts2.dispatcher.SessionMap;
import org.apache.struts2.interceptor.SessionAware;
import org.apache.struts2.util.ServletContextAware;

import com.opensymphony.xwork2.ActionSupport;

import dao.DAOException;
import dao.DAOFactory;
import dao.SgodaDAO;





public class ObjetosAction extends ActionSupport implements ServletContextAware, SessionAware{

	private ServletContext servletContext;
	
	
	private String accion;
	private DAOFactory daoFactory;
	private SgodaDAO sgodaDAO;
	private String mensaje;
	private String mensajeR;
	
	private SessionMap<String,Object> session;
	
	@Override
	public void setSession(Map<String, Object> arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setServletContext(ServletContext arg0) {
		// TODO Auto-generated method stub
		
	}
	public String execute() {
		String resultado = "ninguno";
		try {
			daoFactory = DAOFactory.getDAOFactory(Integer.parseInt(servletContext.getInitParameter("TIPO")),
					(String) servletContext.getInitParameter("DRIVER"), (String) servletContext.getInitParameter("IP"),
					(String) servletContext.getInitParameter("BD"), (String) servletContext.getInitParameter("USUARIO"),
					(String) servletContext.getInitParameter("PASS"));

			sgodaDAO = daoFactory.getSgdaoDAO();
			System.out.println("la accion es " + accion);
			
			
		} catch (DAOException e) {
			e.printStackTrace();
			mensaje = "Ocurrio un error. Favor de comunicarse con el administrador del sistema";
		} 
		System.out.println(resultado);
		return resultado;
	}

	public String getAccion() {
		return accion;
	}

	public void setAccion(String accion) {
		this.accion = accion;
	}


	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public String getMensajeR() {
		return mensajeR;
	}

	public void setMensajeR(String mensajeR) {
		this.mensajeR = mensajeR;
	}
	

	
}
