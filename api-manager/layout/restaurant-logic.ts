import { ENDPOINTS } from "../../src/utils/constants";

class RestaurantLogicApiManager {
  static sharedInstance = new RestaurantLogicApiManager();

  private refactorLayoutData = (data: any) => {
    const responseLayout: any = {};

    if (data.data.cards[0].card.card.info) {
      const info = data.data.cards[0].card.card.info;
      let layoutCardJson: any = {};
      layoutCardJson = {
        restaurantName: info?.name,
        avgRating: info?.avgRating,
        cuisines: info?.cuisines,
        imageId: info?.cloudinaryImageId,
        costForTwo: info?.costForTwoMessage,
        id: info?.id,
        totalRatingsString: info?.totalRatingsString,
        timeTaken: info?.sla?.slaString,
        distanceFromYou: info?.sla?.lastMileTravelString,
        city: info?.city,
        areaName: info?.areaName,
        fee: info?.feeDetails,
      };
      responseLayout.restaurantcard = layoutCardJson;
    }

    if (
      data.data.cards[1].card.card.gridElements.infoWithStyle.offers.length > 0
    ) {
      const offers =
        data.data.cards[1].card.card.gridElements.infoWithStyle.offers;
      const layoutOffersJson: any = [];
      offers.map((item: any) => {
        layoutOffersJson.push({
          couponCode: item?.info?.couponCode,
          description: item?.info?.description,
          header: item?.info?.header,
          offerLogo: item?.info?.offerLogo,
          restId: item?.info?.restId,
        });
      });
      responseLayout.restaurantOffers = layoutOffersJson;
    }

    if (data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.length > 0) {
      const restaurantJson: any = [];
      const cards = data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
      const filterCards = cards.filter(
        (item: any) =>
          typeof item?.card?.card?.title === "string" &&
          item?.card?.card?.itemCards?.length > 0
      );
      filterCards?.length > 0 &&
        filterCards.map((item: any) => {
          const info = item?.card?.card;
          restaurantJson.push({
            itemCards: info?.itemCards,
            title: info?.title,
          });
        });
      responseLayout.restaurantData = restaurantJson;
    }
    return responseLayout;
  };

  public restaurantLayoutData = async (restaurantId: string) => {
    const response = await fetch(`${ENDPOINTS.restaurant}${restaurantId}`);
    const data = await response.json();
    return this.refactorLayoutData(data);
  };
}

export default RestaurantLogicApiManager;
