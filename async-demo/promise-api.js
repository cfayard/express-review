const p = Promise.reject("reason for rejection...");
p.catch((error) => console.log(error));
