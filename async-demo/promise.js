const p = new Promise(function (resolve, reject) {
  // Kick of some async work
  // ...
  setTimeout(() => {
    resolve(1); // pending => resolved, fufilled
    reject(new Error("message")); // pending => rejected
  }, 2000);
});

p.then((result) => console.log("Result", result)).catch((err) =>
  console.log("Error", err.message)
);
