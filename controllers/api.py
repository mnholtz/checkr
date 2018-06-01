from gluon.utils import web2py_uuid

@auth.requires_login()
@auth.requires_signature()
def add_category():
	name = request.vars['name']
	id = db.category.insert(name=name)
	new_category = db.category[id]
	return response.json(dict(new_category=new_category.name))
	
@auth.requires_login()
@auth.requires_signature()
def get_categories():
	rows = db().select(db.categories.ALL)
	categories = []
	for row in rows:
		categories.append(row.name)
	return response.json(dict(categories=categories))