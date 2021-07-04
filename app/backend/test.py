logData = "<patient-name> <vaccinae-name> <dose-1-or-2>  <date>"
import datetime

bothDoses = {}
dateCalc = {}

with open("test.txt", r) as f:
    lines = f.readLines()

    for line in lines:
        name = lines.split(' ')[0]
        data = lines.split(' ')[3]

        if name in bothDoses.keys():
            print("Second Dose Completed for {}".format(name))
            dateCalc.remove(name) ##
        else:
            bothDoses[name] = 1
            dateCalc[name] = date


for key in dateCalc.keys():
    date = datetime.datetime(dateCalc[key]) ##
    dateCalc[key] = date + date.day(90) ##

print(dateCalc)
    
