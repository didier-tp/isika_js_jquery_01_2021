package tp.data;

public class Product {
	
	private Integer code; // 1 ou 2 ou ...
	private String nom;
	private Double prix;
	private String description;
	private String categorie;  //ex: "papeterie" , "ordinateur" , "imprimante"
	
	
	
	public Product() {
		super();
	}

	public Product(Integer code, String nom, Double prix) {
		super();
		this.code = code;
		this.nom = nom;
		this.prix = prix;
	}
	
	

	public Product(Integer code, String nom, Double prix, String description, String categorie) {
		super();
		this.code = code;
		this.nom = nom;
		this.prix = prix;
		this.description = description;
		this.categorie = categorie;
	}

	@Override
	public String toString() {
		return "Product [code=" + code + ", nom=" + nom + ", prix=" + prix + ", description=" + description
				+ ", categorie=" + categorie + "]";
	}
	
	public Integer getCode() {
		return code;
	}
	public void setCode(Integer code) {
		this.code = code;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public Double getPrix() {
		return prix;
	}
	public void setPrix(Double prix) {
		this.prix = prix;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCategorie() {
		return categorie;
	}
	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}
	
	
}
