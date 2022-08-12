# WEATHER APP


# ROADBLOCKS
One roadblock is figuring out how best to handle errors, and figuring out why my "catch" block in a "try / catch" block format is not being run. This is because Open Weather API seems to return a value consisting of an object indicating the city was not found. Thus, it's not actually throwing an error.