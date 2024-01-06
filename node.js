let total = 0;

function handleClick(data) {
  const rosesName = document.getElementById("rosesName");
  const count = rosesName.childElementCount;
  const itemName = data.parentNode.parentNode.childNodes[1].innerText;
  const p = document.createElement("p");
  p.innerText = `${count + 1} . ${itemName}`;
  rosesName.appendChild(p);

  // add calculate money
  const price =
    data.parentNode.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total;
  // discount element
  const discount = document.getElementById("discount");
  const totalDiscount = total / 2 - 10;
  discount.innerText = totalDiscount;

  // grand total
  document.getElementById("grandTotal").innerText =
    parseInt(price) + parseInt(totalDiscount);
}
