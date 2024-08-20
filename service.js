export class Services {
  #ServiceID;
  constructor(ServiceID, Service_Name, Service_Description, Price) {
    (this.#ServiceID = ServiceID),
      (this.Service_Name = Service_Name),
      (this.Service_Description = Service_Description),
      (this.Price = Price);
  }

  getServiceDetails() {
    return `Service ID: ${this.#ServiceID}, Service Name: ${this.Service_Name},
        Service Description: ${this.Service_Description}, Price: ${this.Price}`;
  }
}
