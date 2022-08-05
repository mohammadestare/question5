const student_array = [
  { id: 1, name: "Jacek", notes: [5, 3, 4, 2, 5, 5] },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5],
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3],
  },
  {
    id: 3,
    name: "Zygmunt",
  },
];

function arrayMax(arr) {
  if (!arr) return 0;
  return arr.reduce(function (p, v) {
    return p > v ? p : v;
  });
}

function getStudentTopNotes(arr) {
  result_list = [];
  for (let key of arr) {
    let max_element = arrayMax(key["notes"]);
    result_list.push(max_element);
  }
  return result_list;
}

console.log("result is :", getStudentTopNotes(student_array));
