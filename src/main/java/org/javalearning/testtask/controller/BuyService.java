package org.javalearning.testtask.controller;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by 007 on 30.09.2018.
 */
@WebServlet("/myapp/buyService")
public class BuyService extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
        response.setStatus(HttpServletResponse.SC_CREATED);
    }
}
