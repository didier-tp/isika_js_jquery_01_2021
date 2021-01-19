package tp.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import tp.data.Product;
import tp.service.ProductService;
import tp.service.ProductServiceImpl;
import tp.util.JacksonJsonUtil;

/**
 * Servlet implementation class JsonRestProductServlet
 */
//@WebServlet("/JsonRestProductServlet")
@WebServlet("/product-api/product")
public class JsonRestProductServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private static ProductService productService = new ProductServiceImpl();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JsonRestProductServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String categorie = request.getParameter("categorie"); //si ?categorie=... en fin d'url
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		List<Product> produits = null;
		if(categorie != null)
			produits =	productService.findProductByCategorie(categorie);
		else 
			produits =	productService.findAllProduct();
		String produitsAsJsonString = JacksonJsonUtil.stringify(produits);
		out.println(produitsAsJsonString);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
