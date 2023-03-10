package com.hyechun.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

	@RequestMapping(value = "/")
	public String index() {
	       return "index";
	}
	
	@RequestMapping(value = "/home.do")
    public String main()throws Exception{
		return "index";
    }
	
	@RequestMapping(value = "/board.do")
    public String board()throws Exception{
		return "board";
    }
	
	@RequestMapping(value = "/financial.do")
    public String financial()throws Exception{
		return "financial";
    }
	
	@RequestMapping(value = "/history.do")
    public String history()throws Exception{
		return "history";
    }
	
}
