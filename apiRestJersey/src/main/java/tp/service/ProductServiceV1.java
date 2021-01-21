package tp.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import tp.data.ProductV1;


/* java service  (with or without spring/jpa) */
public class ProductServiceV1 {
	
private Map<Long,ProductV1> mapProducts = new HashMap<Long,ProductV1>();
private Long maxId;
	
	public ProductServiceV1(){
		mapProducts.put(1L,new ProductV1(1L,"iphone X","sophisticated smartphone (Apple)",600.0));
		mapProducts.put(2L,new ProductV1(2L,"galaxy S10","good Android smartphone of Samsung",700.0));
		mapProducts.put(3L,new ProductV1(3L,"Huawei P30","smartphone android moderne",550.0));
		maxId=3L;
	}
	

	
	public List<ProductV1> getAllProducts(){
		return new ArrayList<ProductV1>( mapProducts.values());
	}
	
	public List<ProductV1> getCheapProducts(Double maxPrice){
		List<ProductV1> cheapProds  = new ArrayList<ProductV1>();
		for(ProductV1 p : mapProducts.values())
			if( p.getPrice() <= maxPrice)
				cheapProds.add(p);
		return cheapProds;
	}
	
	
	public ProductV1 getProductById(Long id){
		return mapProducts.get(id);
	}
	

	public void updateProduct(ProductV1 p){
		mapProducts.put(p.getId(), p);
	}

	public Long addNewProduct(ProductV1 p){
		this.maxId++;//simulate auto_incr
		p.setId(this.maxId);
		mapProducts.put(p.getId(), p);
		return this.maxId;
	}
	

	public void deleteProduct(Long id){
		mapProducts.remove(id);
	}
	
	

	
}
