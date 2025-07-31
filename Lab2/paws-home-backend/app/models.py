from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Models
class Volunteer(db.Model):
    __tablename__ = 'volunteers'
    volunteer_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

class Schedule(db.Model):
    __tablename__ = 'schedules'
    schedule_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    volunteer_id = db.Column(db.Integer, db.ForeignKey('volunteers.volunteer_id'), nullable=False)
    shift_date = db.Column(db.Date, nullable=False)
    start_time = db.Column(db.Time, nullable=False)
    end_time = db.Column(db.Time, nullable=False)

class Event(db.Model):
    __tablename__ = 'events'
    event_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    date = db.Column(db.Date, nullable=False)
    location = db.Column(db.String(200), nullable=False)

class Message(db.Model):
    __tablename__ = 'messages'
    message_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(200), nullable=False)
    sender_name = db.Column(db.String(100), nullable=False)
    date = db.Column(db.Date, nullable=False)
    content = db.Column(db.Text, nullable=False)

class LogHours(db.Model):
    __tablename__ = 'log_hours'
    log_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    volunteer_id = db.Column(db.Integer, db.ForeignKey('volunteers.volunteer_id'), nullable=False)
    hours = db.Column(db.Float, nullable=False)
    assignment_type = db.Column(db.String(50), nullable=False)