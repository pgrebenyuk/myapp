package org.javalearning.testtask.entity;

public class Bought {
    private boolean isBought = false;
    private String url = "";

    public Bought() {
    }

    public boolean isBought() {
        return isBought;
    }

    public void setIsBought(boolean buy) {
        isBought = buy;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
