import requests

#we can also return image if we want
def wikipediaInfo(searchItem):
    replaced = searchItem.replace(" ", "_")
    r = requests.get(f"https://en.wikipedia.org/api/rest_v1/page/summary/{replaced}")
    page = r.json()
    d = {}
    d["text"] = page["extract"]
    return [d]
