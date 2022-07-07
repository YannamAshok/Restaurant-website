export async function fetchData(route = "", data = {}, methodType) {
  const response = await fetch(`api${route}`, {
  // const response = await fetch(`http://localhost:3000/api${route}`, {
    method: methodType,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw await response.json();
  }
}

export async function getData(route = "") {
  const response = await fetch(`api${route}`, {
  // const response = await fetch(`http://localhost:3000/api${route}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw await response.json();
  }
}

export async function deltetData(route = "") {
  const response = await fetch(`api${route}`, {
  // const response = await fetch(`http://localhost:3000/api${route}`, {
    method:"DELETE"
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw await response.json();
  }
}


