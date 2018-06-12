from gluon.utils import web2py_uuid

@auth.requires_login()
def add_category():
	name = request.vars['name']
	id = db.categories.insert(name=name, auth_user=auth.user)
	new_category = db.categories[id]
	return response.json(dict(new_category=new_category))
	
def get_categories():
	categories = db(db.categories.auth_user == auth.user).select()
	return response.json(dict(categories=categories))
	
@auth.requires_login()
def add_entry():
	category_id = request.vars['category_id']
	entry_date = request.vars['entry_date']
	entry_value = request.vars['entry_value']
	id = db.entries.update_or_insert((db.entries.entry_date == entry_date) & (db.entries.category == category_id), category=category_id, auth_user=auth.user, entry_value=entry_value, entry_date=entry_date)
	new_entry = db.entries[id]
	return response.json(dict(entry=new_entry))
	
@auth.requires_login()
def delete_category():
	category_id = request.vars['category_id']
	del db.categories[category_id]
	
def get_entries():
	category_id = request.vars['category_id']
	entries = db((db.entries.auth_user == auth.user) & (db.entries.category == category_id)).select()
	return response.json(dict(entries=entries))