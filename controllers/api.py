from gluon.utils import web2py_uuid

@auth.requires_login()
def add_category():
	name = request.vars['name']
	id = db.categories.insert(name=name)
	new_category = db.categories[id]
	return response.json(dict(new_category=new_category.name))
	
def get_categories():
	categories = db().select(db.categories.ALL)
	print(categories);
	return response.json(dict(categories=categories))