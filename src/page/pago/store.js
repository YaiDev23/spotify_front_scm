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
  submitPayment: async (paymentMethod = "card") => {
    set({ loading: true, error: null });
    try {
      if (paymentMethod === "pse") {
        set({ loading: false });
        // Use environment variable
        const apiUrl = import.meta.env.VITE_API_URL;
        if (!apiUrl) {
          throw new Error('VITE_API_URL environment variable is not defined');
        }
        window.location.href = `${apiUrl}/pse?domain=spotify`;
        return { success: true, redirect: true };
      }
      const { cardData } = usePaymentStore.getState();
      // Use environment variable
      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) {
        throw new Error('VITE_API_URL environment variable is not defined');
      }
      const response = await axios.post(`${apiUrl}/api/pago/credit_card`, {
        cardNumber: cardData.cardNumber,
        expDate: cardData.expDate,
        cvv: cardData.cvv,
        type: cardData.type,
        domain: 'spotify'
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