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
							Field('unit', 'string'))
							
db.define_table('range_entries', Field('category', 'reference categories'),
								Field('auth_user', 'reference auth_user'),
								Field('entry', 'double'),
								Field('entry_date', 'datetime'))
								
db.define_table('bool_entries', Field('category', 'reference categories'),
								Field('auth_user', 'reference auth_user'),
								Field('entry', 'boolean'),
								Field('entry_date', 'datetime'))
								
db.define_table('startend_entries', Field('category', 'reference categories'),
								Field('auth_user', 'reference auth_user'),
								Field('start_date', 'datetime'),
								Field('end_date', 'datetime'))