package controlador;

import java.util.Map;

import javax.servlet.ServletContext;

import org.apache.struts2.interceptor.SessionAware;
import org.apache.struts2.util.ServletContextAware;

public class PruebaStruts2 implements ServletContextAware, SessionAware{

	@Override
	public void setServletContext(ServletContext arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setSession(Map<String, Object> arg0) {
		// TODO Auto-generated method stub
		
	}
	
	private ServletContext servletContext;
	private String nombre;
	private String apellido;
	
	public String execute() {
		String resultado="exito";
		System.out.println("Nombre: "+nombre);
		System.out.println("Apellido:"+apellido);
		return resultado;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

}
