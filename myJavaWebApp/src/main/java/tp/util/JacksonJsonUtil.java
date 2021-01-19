package tp.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;


//(com.fasterxml.)jackson.databind in pom.xml is a medium level json api for java

public class JacksonJsonUtil {
	
	public static ObjectMapper jacksonObjectMapper  = new ObjectMapper();
	
	static {
		jacksonObjectMapper.configure(
				DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	}
	
	//classe = Produit.class ou Commande.class
	public static <T>  T parse(String jsonString , Class<T> classe) {
		T obj = null;
		try {
			obj = jacksonObjectMapper.readValue(jsonString,classe);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return obj;
	}
	
	public static String stringify(Object obj) {
		String jsonString=null;
		try {
			jsonString= jacksonObjectMapper.writeValueAsString(obj);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return jsonString;
	}


	
}
