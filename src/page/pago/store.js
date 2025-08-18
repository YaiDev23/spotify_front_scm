import { create } from 'zustand';
import axios from 'axios';

const usePaymentStore = create((set) => ({
  cardData: {
    cardNumber: "",
    expDate: "", // Combined expiration date as "MM/YY"
    cvv: "",
    type: "Visa"
  },
  loading: false,
  error: null,

  // Action to update card data
  updateCardData: (field, value) => 
    set((state) => ({
      cardData: {
        ...state.cardData,
        [field]: value
      }
    })),

  // Action to submit payment
  submitPayment: async () => {
    set({ loading: true, error: null });
    try {
      const { cardData } = usePaymentStore.getState();
      
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/pago/credit_card`, {
        cardNumber: cardData.cardNumber,
        expDate: cardData.expDate,
        cvv: cardData.cvv,
        type: cardData.type
      });

      set({ loading: false });
      return { success: true, data: response.data };
    } catch (error) {
      set({ 
        loading: false, 
        error: error.message || 'Error al procesar el pago' 
      });
      return { success: false, error: error.message };
    }
  }
}));

export default usePaymentStore;