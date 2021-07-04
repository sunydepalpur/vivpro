from flask import Flask, request, json, jsonify
from flask_cors import CORS, cross_origin
import requests
import logging
from  flask_sqlalchemy import SQLAlchemy
import songs
from flasgger import Swagger
import pandas as pd



app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
# to avoid warning
swagger = Swagger(app)

class Song(db.Model):
    __tablename__ = 'songs'
    id = db.Column(db.String, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    danceability = db.Column(db.Float, nullable=False)
    energy = db.Column(db.Float, nullable=False)
    mode = db.Column(db.Float, nullable=False)
    acousticness = db.Column(db.Float, nullable=False)
    tempo = db.Column(db.Float, nullable=False)
    duration_ms = db.Column(db.Float, nullable=False)
    num_sections = db.Column(db.Float, nullable=False)
    num_segments = db.Column(db.Float, nullable=False)
    key = db.Column(db.Float, nullable=False)
    loudness = db.Column(db.Float, nullable=False)
    instrumentalness = db.Column(db.Float, nullable=False)
    liveness = db.Column(db.Float, nullable=False)
    valence = db.Column(db.Float, nullable=False)
    tempo = db.Column(db.Float, nullable=False) 
    duration_ms = db.Column(db.Float, nullable=False) 
    time_signature = db.Column(db.Float, nullable=False) 
    num_bars = db.Column(db.Float, nullable=False)  
    class_ = db.Column(db.Float, nullable=False)
    star_rating = db.Column(db.Integer, nullable=False, default = 0)

    def __repr__(self):
        return '<Song %r>' % self.id

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'danceability': self.danceability,
            'energy': self.energy,
            'key': self.key,
            'loudness': self.loudness,
            'mode': self.mode,
            'acousticness': self.acousticness,
            'instrumentalness': self.instrumentalness,
            'liveness': self.liveness,
            'valence': self.valence,
            'tempo': self.tempo,
            'duration_ms': self.duration_ms,
            'time_signature': self.time_signature,
            'num_bars': self.num_bars,
            'num_sections': self.num_sections,
            'num_segments': self.num_segments,
            'class_': self.class_,
            'star_rating': self.star_rating
          }

# db.create_all()

@app.route('/info')
def info():
    """Info endpoint returning a status or info 
    This is using docstrings for specifications.
    ---
    responses:
      200:
        description: Receiver info static JSON will be returned
        examples:
          /info
    """

    response = app.response_class(
            response=json.dumps({"Receiver": "Cisco is the best!"}),
            status=200,
            mimetype='application/json'
    )

    app.logger.info('Info request successfull')
    return response

@app.route('/getAllSongs')
def getAllSongs():
    """getAllSongs endpoint returning json of all songs 
    This is using docstrings for specifications.
    ---
    responses:
      200:
        description: Songs info static JSON will be returned
        examples:
          /info
    """
    page = request.args.get('page', type = int)
    songs = [z.to_json() for z in (Song.query.all() if page is None else Song.query.limit(1 * 10))]


    response = app.response_class(
            response= json.dumps({"songs" : songs}),
            status=200,
            mimetype='application/json'
    )

    app.logger.info('Info request successfull')
    return response

@app.route('/getSongDetails')
def getSongDetails():
    """getAllDetails endpoint returning json of song details
    This is using docstrings for specifications.
    ---
    responses:
      200:
        description: Songs info static JSON will be returned
        examples:
          /info
    """
    title = request.args.get('title')
    songs = [z.to_json() for z in Song.query.filter(Song.title == title)]


    response = app.response_class(
            response= json.dumps({"songs" : songs}),
            status=200,
            mimetype='application/json'
    )

    app.logger.info('Info request successfull')
    return response


@app.route('/ping', methods=['POST'])
def ping():    
    """Ping endpoint returning the payload it will get from url passed 
    This is using docstrings for specifications.
    ---
    parameters:
      - name: body
        in: body
        type: json
        default: {'url' : 'https://google.com'}
        description: Url for the specific website someone wants to get payload
        schema:
          url: Product
          required:
            - url
          properties:
            url :
              type: string
              description: WebSite Url
              default: "https://google.com"
    definitions:
      Url:
        type: string
        description: WebSite Url
        default: "https://google.com"

    responses:
      200:
        description: Returns payload for the specific url passed 
        examples:
          {'url' : 'https://google.com' }
    """

    if request.method == "POST":        
        req = requests.get(str(request.json['url']).replace("https", "http"))
        app.logger.info('Ping request successfull')
        return app.response_class(
            response=req.text,
            status=req.status_code,
            content_type=req.headers['content-type']
        )

@app.route("/")
def hello():
    app.logger.info('Root request successfull')
    return "Project Running"

@app.route("/test")
def loadJSON():

    df = pd.read_json("backend/data/playlist.json")
    df = df.assign(star_rating=0)

    df.to_sql(name='songs', con=db.engine, index=False, if_exists='replace')
    # s = Song( id="2klCjJcucgGQysgH170npL", 
    #           title="4 Walls",
    #           danceability = 0.849,
    #           energy= 4,
    #           key=-4.308,
    #           loudness=0,
    #           mode=0.212,
    #           acousticness=2.94e-05,
    #           instrumentalness=0.0608,
    #           liveness=0.223,
    #           valence=125.972,
    #           tempo=207477,
    #           duration_ms=4,
    #           time_signature=107,
    #           num_bars=7,
    #           num_sections=999,
    #           num_segments=1,
    #           class_=1)

    db.session.commit()

def loadDataIntoDB():
    loadJSON()

if __name__ == "__main__":
    ## stream logs to a file
    logging.basicConfig(filename='app.log',level=logging.DEBUG)    
    loadDataIntoDB()
    app.run(host='0.0.0.0',port=5000, debug=True)
    
