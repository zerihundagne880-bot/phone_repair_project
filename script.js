document.getElementById("repairForm").addEventListener("submit", function(){
alert("ጥያቄዎ ተልኳል! በቅርቡ እንደውላለን");
});

document.getElementById("reviewForm").addEventListener("submit", function(e){
e.preventDefault();
let name = document.getElementById("reviewName").value;
let text = document.getElementById("reviewText").value;
let review = document.createElement("div");
review.className="review-card";
review.innerHTML = `
<p>⭐ ⭐ ⭐ ⭐ ⭐</p>
<p>"${text}"</p>
<strong>- ${name}</strong>
`;
document.getElementById("reviewList").appendChild(review);
document.getElementById("reviewForm").reset();
});
