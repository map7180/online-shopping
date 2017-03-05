package com.mk.shoppingbackend.dao;

import java.util.List;

import com.mk.shoppingbackend.dto.Category;

public interface CategoryDAO {

	
	boolean add(Category category);
	List<Category> list();
	Category get(int id);
	
}
