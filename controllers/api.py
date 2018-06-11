from gluon.utils import web2py_uuid

@auth.requires_login()
def add_category():
	name = request.vars['name']
	id = db.categories.insert(name=name)
	new_category = db.categories[id]
	return response.json(dict(new_category=new_category.name))
	
def get_categories():
	categories = db().select(db.categories.ALL)
	return response.json(dict(categories=categories))
	
@auth.requires_login()
def add_entry():
	category_id = request.vars['category_id']
	entry_date = request.vars['entry_date']
	entry_value = request.vars['entry_value']
	id = db.entries.insert(category=category_id, auth_user=auth.user, entry_value=entry_value, entry_date=entry_date)
	new_entry = db.entries[id]
	print(new_entry)
	return response.json(dict(entry=new_entry))
	
@auth.requires_login()
def delete_category():
	category_id = request.vars['category_id']
	del db.categories[category_id]