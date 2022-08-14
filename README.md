# Weather App
This website displays weather information about any city in the world. Simply type the city you want in the text field, press Enter, and it should show weather information provided by Open Weather Map.

# Roadblocks
One roadblock is figuring out how best to handle errors when fetching asynchronously, and figuring out why my "catch" block in a "try / catch" block format is not being run. This is because Open Weather Map API seems to return a value consisting of an object indicating the city was not found. Thus, it's not actually throwing an error.