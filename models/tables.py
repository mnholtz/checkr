# Define your tables below (or better in another model file) for example
#
# >>> db.define_table('mytable', Field('myfield', 'string'))
#
# Fields can be 'string','text','password','integer','double','boolean'
#       'date','time','datetime','blob','upload', 'reference TABLENAME'
# There is an implicit 'id integer autoincrement' field
# Consult manual for more options, validators, etc.


# after defining tables, uncomment below to enable auditing
# auth.enable_record_versioning(db)
db.define_table('categories', Field('name', 'string'),
							Field('unit', 'string'),
							Field('auth_user', 'reference auth_user'))
							
db.define_table('entries', Field('category', 'reference categories'),
								Field('auth_user', 'reference auth_user'),
								Field('entry_value', 'double'),
								Field('entry_date', 'date'))