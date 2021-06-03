package com.cybage.log4jdemo;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

/**
 * Hello world!
 *
 */
public class App 
{
	private static final Logger logger = LogManager.getLogger(App.class);
	 public static void main(String[] args) {
	 
	  PropertyConfigurator.configure("resources/log4j.properties");
	  logger.info("Info Initiated");
	  logger.warn("Warning message");
	 
}
}
