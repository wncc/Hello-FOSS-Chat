import requests
import time
from flask import Flask , render_template, session, request, jsonify
from flask_socketio import SocketIO, send, emit
app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app)
channels=[{"ch":"General","key":""}]
dname=""
msgs=[]
channel="General"
users=[]
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/login",methods=["GET","POST"])
def login():
    dname=request.form.get('dname')
    password=request.form.get('password')
    found = 0
    for i in range(len(users)):
        if users[i]["dname"] == dname:
            found = 1
            if users[i]["password"] == password:                
                channel= users[i]["channel"]
                return render_template('login.html', dname= dname ,channels=channels,channel=channel)
            else:
                return render_template('index.html',message="Looks like the Display Name has been already taken or you have entered incorrect password")

    if found == 0:
        if dname == "" or password == "":
            return render_template('index.html',message="Display Name or Password cannot be empty")
        else:
            users.append({'dname': dname, 'password':password, 'channel': "General"})
            return render_template('login.html', dname= dname ,channels=channels,channel="General")

@socketio.on('send msg')
def handleMessage(data):
        print(data)
        newdata={'user': data["user"],'msg':data["msg"],'time':time.strftime('%b %d %H:%M:%S',time.localtime()),'channel':data["channel"]}
        if len([msgs[i] for i in range(len(msgs)) if msgs[i]["channel"]== data["channel"] ])>100:
            for i in range(len(msgs)):
                if msgs[i]["channel"] == data["channel"]:
                    msgs.pop(i)
                    break
        msgs.append(newdata)
        emit('recieved msg',newdata, broadcast = True )
        

@socketio.on('channel created')
def addChannel(channel):
    if channel not in channels:
        channels.append({"ch":channel["ch"],"key":channel["key"]})   
        emit('channel recieved',{"channels":channels} , brodcast = True)
        

@socketio.on('join')
def join(_data):
    if _data["channel"] in channels or _data["channel"]["key"] == "yvh8273vrhtd^&":
        print(_data["user"] ,"has joined channel", _data["channel"]["ch"])
        data={"data":_data,"msgs":[msgs[i] for i in range(len(msgs)) if msgs[i]["channel"]==_data["channel"]["ch"]]}
        emit('joined',data, brodcast = True)
        

@socketio.on('logout_reload')
def user_append(user):
    for i in range(len(users)):
        if users[i]["dname"]==user["dname"]:
            password=users[i]["password"]
            users.pop(i)
            user={"dname":user["dname"],"password":password ,"channel":user["channel"]}
            users.append(user)

if __name__ == '__main__':
	socketio.run(app)
