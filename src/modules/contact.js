function createContact(){
	let main = document.createElement("main");
	
	let contact__container = document.createElement("div");
	contact__container.classList.add("contact-container");
	main.appendChild(contact__container);
	
	let phone_number = document.createElement("div");
	phone_number.classList.add("phone-number");
	phone_number.innerHTML = '<i class="fa-solid fa-phone"></i>014781215';
	contact__container.appendChild(phone_number);
	
	let address = document.createElement("div");
	address.classList.add("address");
	address.innerHTML = '<i class="fa-solid fa-house-chimney"></i>Masangali Newroad, Kathmandu';
	contact__container.appendChild(address);
	
	let address_image_container = document.createElement("div");
	address_image_container.classList.add("address-image-container");
	contact__container.appendChild(address_image_container);
	
	let address_image = document.createElement("img");
	address_image.src = "https://img.freepik.com/free-psd/jiaozi-isolated-transparent-background_191095-29389.jpg"
	address_image.alt = "Address";
	address_image_container.appendChild(address_image);

	return main;
}
export default createContact;