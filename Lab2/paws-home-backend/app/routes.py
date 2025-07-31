from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from models import db, Volunteer, Schedule, Event, Message, LogHours

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:202025085@localhost/paws_home_vms'
db.init_app(app)

# API Endpoints
# API for managing volunteers
@app.route('/api/volunteers', methods=['POST'])
def create_volunteer():
    data = request.get_json()
    new_volunteer = Volunteer(name=data['name'], email=data['email'])
    db.session.add(new_volunteer)
    db.session.commit()
    return jsonify(
        {"volunteer_id": new_volunteer.volunteer_id}), 201

@app.route('/api/volunteers', methods=['GET'])
def get_volunteers():
    volunteers = Volunteer.query.all()
    return jsonify([
        {"volunteer_id": volunteer.volunteer_id, 
         "name": volunteer.name, 
         "email": volunteer.email
         } for volunteer in volunteers
         ]), 200

@app.route('/api/volunteers/<int:volunteer_id>', methods=['GET'])
def get_volunteer(volunteer_id): 
    volunteer = Volunteer.query.get_or_404(volunteer_id)
    return jsonify(
        {"volunteer_id": volunteer.volunteer_id, 
         "name": volunteer.name, 
         "email": volunteer.email
         }
         ), 200

@app.route('/api/volunteers/<int:volunteer_id>', methods=['PUT'])
def update_volunteer(volunteer_id):
    data = request.get_json()
    volunteer = Volunteer.query.get_or_404(volunteer_id)
    volunteer.name = data['name']
    volunteer.email = data['email']
    db.session.commit()
    return jsonify(
        {"volunteer_id": volunteer.volunteer_id, 
         "name": volunteer.name, 
         "email": volunteer.email
         }
         ), 200

@app.route('/api/volunteers/<int:volunteer_id>', methods=['DELETE'])
def delete_volunteer(volunteer_id):
    volunteer = Volunteer.query.get_or_404(volunteer_id)
    db.session.delete(volunteer)
    db.session.commit()
    return jsonify({"message": "Volunteer deleted successfully"}), 204

# API for scheduling shifts
@app.route('/api/schedules', methods=['POST'])
def create_schedule():  
    data = request.get_json()
    shift_date = datetime.strptime(data['shift_date'], '%Y-%m-%d').date()
    start_time = datetime.strptime(data['start_time'], '%H:%M:%S').time()
    end_time = datetime.strptime(data['end_time'], '%H:%M:%S').time()
    new_schedule = Schedule(
        volunteer_id=data['volunteer_id'],
        shift_date=shift_date,
        start_time=start_time,
        end_time=end_time
    )
    db.session.add(new_schedule)
    db.session.commit()
    return jsonify({"schedule_id": new_schedule.schedule_id}), 201

@app.route('/api/schedules', methods=['GET'])
def get_schedules():
    schedules = Schedule.query.all()
    return jsonify([
        {"schedule_id": schedule.schedule_id, 
         "volunteer_id": schedule.volunteer_id, 
         "shift_date": schedule.shift_date.strftime('%Y-%m-%d'), 
         "start_time": schedule.start_time.strftime('%H:%M'), 
         "end_time": schedule.end_time.strftime('%H:%M')
         } for schedule in schedules
         ]), 200

# Event API
@app.route('/api/events', methods=['POST'])
def create_event():     
    data = request.get_json()
    new_event = Event(
        name=data['name'], 
        description=data['description'], 
        date=datetime.strptime(data['date'], '%Y-%m-%d').date(), 
        location=data['location']
        )
    db.session.add(new_event)
    db.session.commit()
    return jsonify({"event_id": new_event.event_id}), 201

@app.route('/api/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    return jsonify([
        {"event_id": event.event_id, 
         "name": event.name, "description": event.description,
         "date": event.date.strftime('%B %d, %Y'), 
         "location": event.location
         } for event in events
         ]), 200

# Message API
@app.route('/api/messages', methods=['POST'])
def create_message():   
    data = request.get_json()
    new_message = Message(
        title=data['title'], 
        sender_name=data['sender_name'], 
        date=datetime.strptime(data['date'], '%Y-%m-%d').date(), 
        content=data['content']
        )
    db.session.add(new_message)
    db.session.commit()
    return jsonify({"message_id": new_message.message_id}), 201

@app.route('/api/messages', methods=['GET'])
def get_messages():
    messages = Message.query.all()
    return jsonify([
        {"message_id": message.message_id, 
         "title": message.title, 
         "sender_name": message.sender_name, 
         "date": message.date.strftime('%B %d, %Y'), 
         "content": message.content
         } for message in messages
         ]), 200

# Log Hours API
@app.route('/api/log_hours', methods=['POST'])
def log_hours():   
    data = request.get_json()
    new_log = LogHours(
        volunteer_id=data['volunteer_id'], 
        hours=data['hours'], 
        assignment_type=data['assignment_type']
        )
    db.session.add(new_log)
    db.session.commit()
    return jsonify({"log_id": new_log.log_id}), 201

@app.route('/api/log_hours', methods=['GET'])
def get_log_hours():
    logs = LogHours.query.all()
    return jsonify([
        {"log_id": log.log_id, 
         "volunteer_id": log.volunteer_id, 
         "hours": log.hours, 
         "assignment_type": log.assignment_type
         } for log in logs
         ]), 200


if __name__ == '__main__':
    # with app.app_context():
    #     db.drop_all()
    #     db.create_all()
    app.run(debug=True)