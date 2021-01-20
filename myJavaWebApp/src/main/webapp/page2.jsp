<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>page2</title>
</head>
<body>
     <h1>page2</h1>
     <%
     String sa = request.getParameter("a");
     String sb = request.getParameter("b");
     double a = Double.parseDouble(sa);
     double b = Double.parseDouble(sb);
     double res = a+b;
     %>
     pour a = <%=a%> et b= <%=b%> , res=a+b=<%=res%> <br/>
     <a href="page1.jsp">retour vers page1</a>
</body>
</html>