import flask_sqlalchemy

db = flask_sqlalchemy.SQLAlchemy()
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
