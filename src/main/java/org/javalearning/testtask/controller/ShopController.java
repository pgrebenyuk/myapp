package org.javalearning.testtask.controller;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by 007 on 29.09.2018.
 */
@WebServlet("/myapp/shop")
public class ShopController extends HttpServlet{

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("/shop.html").forward(req, resp);
       // PrintWriter writer = resp.getWriter();
       // writer.println("<h1>Hello, World!</h1>");
    }
}
