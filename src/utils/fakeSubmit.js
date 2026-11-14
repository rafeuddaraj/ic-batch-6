export function fakeSubmit(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (title.length < 3) {
        reject(new Error("কাজের নাম কমপক্ষে ৩ অক্ষরের হতে হবে"));
      } else {
        resolve();
      }
    }, 1000);
  });
}
