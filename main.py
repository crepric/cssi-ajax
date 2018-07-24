
import webapp2
import json
import jinja2
import os


jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)


class MainHandler(webapp2.RequestHandler):
  def get(self):
    template = jinja_env.get_template('index.html')
    self.response.write(template.render())  


class GetDataHandler(webapp2.RequestHandler):
  def get(self):
    self.response.out.write(json.dumps(
      {'color': 'lightblue', 
       'text': 'this is some test'}))

app = webapp2.WSGIApplication([
  ('/', MainHandler),
  ('/get_data', GetDataHandler),
])
