<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>page1</title>
</head>
<body>
    <h1>page1</h1>
    <form action="page2.jsp" method="GET">
       a: <input type="text" name="a" /> <br/>
       b: <input type="text" name="b" /> <br/>
       <input type="submit" value="additionner (coté serveur)">
    </form>
</body>
</html>