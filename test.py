
def logDetails(func):
    def wrapper(*args, **kwargs):
        print("Logs Started")
        calc =  func(*args, **kwargs)
        print("Logs Stopped")
        return calc

    return wrapper

@logDetails
def test(n):
    print("N : {}".format(n))


test(1000)