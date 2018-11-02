package org.javalearning.testtask.controller;

import org.javalearning.testtask.entity.Bought;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@ResponseStatus(HttpStatus.CREATED)
public class BuyService {

    @PostMapping("/buyService")
    public Bought postBuy() {
        Bought buy = new Bought();
        buy.setIsBought(true);
        buy.setUrl("/myapp/shop/success");
        return buy;
    }
}
