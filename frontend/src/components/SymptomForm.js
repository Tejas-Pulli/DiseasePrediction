import React, { useState } from 'react';
import { predictDisease } from '../api';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { Card, CardContent, TextField, Button, Typography, List, ListItem, ListItemText } from '@mui/material'; // Import Material-UI components
import './SymptomForm.css'; 
import Header from './Header'; // Import Header component
import Footer from './Footer';


function SymptomForm() {
  const [symptoms, setSymptoms] = useState([]);
  const [prediction, setPrediction] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [precautions, setPrecautions] = useState([]);
  const allSymptoms = ['itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain' ,'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze'];

  // Precautions data in JSON format
  const precautionData = {
      "Drug Reaction": {
        "precautions": [
          "Stop irritation",
          "Consult nearest hospital",
          "Stop taking drug",
          "Follow up"
        ]
      },
      "Malaria": {
        "precautions": [
          "Consult nearest hospital",
          "Avoid oily food",
          "Avoid non veg food",
          "Keep mosquitos out"
        ]
      },
      "Allergy": {
        "precautions": [
          "Apply calamine",
          "Cover area with bandage",
          "Use ice to compress itching"
        ]
      },
      "Hypothyroidism": {
        "precautions": [
          "Reduce stress",
          "Exercise",
          "Eat healthy",
          "Get proper sleep"
        ]
      },
      "Psoriasis": {
        "precautions": [
          "Wash hands with warm soapy water",
          "Stop bleeding using pressure",
          "Consult doctor",
          "Salt baths"
        ]
      },
      "GERD": {
        "precautions": [
          "Avoid fatty spicy food",
          "Avoid lying down after eating",
          "Maintain healthy weight",
          "Exercise"
        ]
      },
      "Chronic cholestasis": {
        "precautions": [
          "Cold baths",
          "Anti itch medicine",
          "Consult doctor",
          "Eat healthy"
        ]
      },
      "Hepatitis A": {
        "precautions": [
          "Consult nearest hospital",
          "Wash hands through",
          "Avoid fatty spicy food",
          "Medication"
        ]
      },
      "Osteoarthristis": {
        "precautions": [
          "Acetaminophen",
          "Consult nearest hospital",
          "Follow up",
          "Salt baths"
        ]
      },
      "(vertigo) Paroymsal  Positional Vertigo": {
        "precautions": [
          "Lie down",
          "Avoid sudden change in body",
          "Avoid abrupt head movment",
          "Relax"
        ]
      },
      "Hypoglycemia": {
        "precautions": [
          "Lie down on side",
          "Check in pulse",
          "Drink sugary drinks",
          "Consult doctor"
        ]
      },
      "Acne": {
        "precautions": [
          "Bath twice",
          "Avoid fatty spicy food",
          "Drink plenty of water",
          "Avoid too many products"
        ]
      },
      "Diabetes": {
        "precautions": [
          "Have balanced diet",
          "Exercise",
          "Consult doctor",
          "Follow up"
        ]
      },
      "Impetigo": {
        "precautions": [
          "Soak affected area in warm water",
          "Use antibiotics",
          "Remove scabs with wet compressed cloth",
          "Consult doctor"
        ]
      },
      "Hypertension": {
        "precautions": [
          "Meditation",
          "Salt baths",
          "Reduce stress",
          "Get proper sleep"
        ]
      },
      "Peptic ulcer diseae": {
        "precautions": [
          "Avoid fatty spicy food",
          "Consume probiotic food",
          "Eliminate milk",
          "Limit alcohol"
        ]
      },
      "Dimorphic hemmorhoids(piles)": {
        "precautions": [
          "Avoid fatty spicy food",
          "Consume witch hazel",
          "Warm bath with epsom salt",
          "Consume alovera juice"
        ]
      },
      "Common Cold": {
        "precautions": [
          "Drink vitamin c rich drinks",
          "Take vapour",
          "Avoid cold food",
          "Keep fever in check"
        ]
      },
      "Chicken pox": {
        "precautions": [
          "Use neem in bathing",
          "Consume neem leaves",
          "Take vaccine",
          "Avoid public places"
        ]
      },
      "Cervical spondylosis": {
        "precautions": [
          "Use heating pad or cold pack",
          "Exercise",
          "Take otc pain reliver",
          "Consult doctor"
        ]
      },
      "Hyperthyroidism": {
        "precautions": [
          "Eat healthy",
          "Massage",
          "Use lemon balm",
          "Take radioactive iodine treatment"
        ]
      },
      "Urinary tract infection": {
        "precautions": [
          "Drink plenty of water",
          "Increase vitamin c intake",
          "Drink cranberry juice",
          "Take probiotics"
        ]
      },
      "Varicose veins": {
        "precautions": [
          "Lie down flat and raise the leg high",
          "Use oinments",
          "Use vein compression",
          "Dont stand still for long"
        ]
      },
      "AIDS": {
        "precautions": [
          "Avoid open cuts",
          "Wear ppe if possible",
          "Consult doctor",
          "Follow up"
        ]
      },
      "Paralysis (brain hemorrhage)": {
        "precautions": [
          "Massage",
          "Eat healthy",
          "Exercise",
          "Consult doctor"
        ]
      },
      "Typhoid": {
        "precautions": [
          "Eat high calorie vegitables",
          "Antiboitic therapy",
          "Consult doctor",
          "Medication"
        ]
      },
      "Hepatitis B": {
        "precautions": [
          "Consult nearest hospital",
          "Vaccination",
          "Eat healthy",
          "Medication"
        ]
      },
      "Fungal infection": {
        "precautions": [
          "Bath twice",
          "Use detol or neem in bathing water",
          "Keep infected area dry",
          "Use clean cloths"
        ]
      },
      "Hepatitis C": {
        "precautions": [
          "Consult nearest hospital",
          "Vaccination",
          "Eat healthy",
          "Medication"
        ]
      },
      "Migraine": {
        "precautions": [
          "Meditation",
          "Reduce stress",
          "Use poloroid glasses in sun",
          "Consult doctor"
        ]
      },
      "Bronchial Asthma": {
        "precautions": [
          "Switch to loose cloothing",
          "Take deep breaths",
          "Get away from trigger",
          "Seek help"
        ]
      },
      "Alcoholic hepatitis": {
        "precautions": [
          "Stop alcohol consumption",
          "Consult doctor",
          "Medication",
          "Follow up"
        ]
      },
      "Jaundice": {
        "precautions": [
          "Drink plenty of water",
          "Consume milk thistle",
          "Eat fruits and high fiberous food",
          "Medication"
        ]
      },
      "Hepatitis E": {
        "precautions": [
          "Stop alcohol consumption",
          "Rest",
          "Consult doctor",
          "Medication"
        ]
      },
      "Dengue": {
        "precautions": [
          "Drink papaya leaf juice",
          "Avoid fatty spicy food",
          "Keep mosquitos away",
          "Keep hydrated"
        ]
      },
      "Hepatitis D": {
        "precautions": [
          "Consult doctor",
          "Medication",
          "Eat healthy",
          "Follow up"
        ]
      },
      "Heart attack": {
        "precautions": [
          "Call ambulance",
          "Chew or swallow asprin",
          "Keep calm"
        ]
      },
      "Pneumonia": {
        "precautions": [
          "Consult doctor",
          "Medication",
          "Rest",
          "Follow up"
        ]
      },
      "Arthritis": {
        "precautions": [
          "Exercise",
          "Use hot and cold therapy",
          "Try acupuncture",
          "Massage"
        ]
      },
      "Gastroenteritis": {
        "precautions": [
          "Stop eating solid food for while",
          "Try taking small sips of water",
          "Rest",
          "Ease back into eating"
        ]
      },
      "Tuberculosis": {
        "precautions": [
          "Cover mouth",
          "Consult doctor",
          "Medication",
          "Rest"
        ]
      }
    
    };
    
  // Function to load precautions for the predicted disease
  const loadPrecautions = (predictedDisease) => {
    const precautionsForDisease = precautionData[predictedDisease]?.precautions || [];
    setPrecautions(precautionsForDisease);
  };

  // const loadPrecautionsFromCSV = async (predictedDisease) => {
  //   try {
  //     // Replace 'precautions.csv' with your CSV file path
  //     const response = await fetch('D:/Work/FinalProject/frontend/src/data/disease_precautions.csv');
  //     const reader = response.body.getReader();
  //     const result = await reader.read();
  //     const decoder = new TextDecoder('utf-8');
  //     const csv = decoder.decode(result.value);
      
  //     // Parse CSV data using papaparse
  //     const { data } = Papa.parse(csv, { header: true });

  //     // Find precautions for the predicted disease
  //     const predictedDiseasePrecautions = data.find(item => item.disease === predictedDisease);

  //     // Set precautions state
  //     if (predictedDiseasePrecautions) {
  //       setPrecautions([
  //         predictedDiseasePrecautions.precaution1,
  //         predictedDiseasePrecautions.precaution2,
  //         predictedDiseasePrecautions.precaution3,
  //         predictedDiseasePrecautions.precaution4,
  //       ]);
  //     } else {
  //       setPrecautions([]);
  //     }
  //   } catch (error) {
  //     console.error('Error loading precautions:', error);
  //   }
  // };

  // Filter symptoms based on the search term, excluding already selected symptoms
  const filteredSymptoms = allSymptoms.filter(symptom =>
    symptom.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !symptoms.includes(symptom) 
  );

  // Handle change in the search bar input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle selection of a symptom
  const handleSymptomSelect = (symptom) => {
    if (!symptoms.includes(symptom)) {
      setSymptoms([...symptoms, symptom]);
      setSearchTerm(''); // Clear the input field after adding the symptom
      setPrediction(''); // Clear the prediction state
      setPrecautions([]); // Clear the precautions state
    }
  };

  // Handle removal of a selected symptom
  const removeSymptom = (symptomToRemove) => {
    const updatedSymptoms = symptoms.filter(symptom => symptom !== symptomToRemove);
    setSymptoms(updatedSymptoms);
    setPrediction(''); // Clear the prediction state
    setPrecautions([]); // Clear the precautions state
  };

  // Handle submission of selected symptoms for prediction
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (symptoms.length < 2) {
      toast.error('Please select at least two symptoms for prediction.'); // Show toast error message
      return;
    }
    try {
      const response = await predictDisease(symptoms);
      console.log('Response:', response);
      setPrediction(response.predicted_disease);

      // Load precautions for the predicted disease
      loadPrecautions(response.predicted_disease);
    } catch (error) {
      console.error('Error predicting disease:', error);
    }
  };

  return (
    <div className="symptom-form-container">
    <Header className="header"/>
     <div className="main-content">
      <div className="symptom-form">
        <TextField
            type="text"
            label="Search symptoms..."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
            margin="normal"
          />
          {searchTerm && (
            <div className="symptom-list-container">
            <ul className="symptom-list">
              {filteredSymptoms.map(symptom => (
                <ListItem key={symptom} button onClick={() => handleSymptomSelect(symptom)}>
                  <ListItemText primary={symptom} />
                </ListItem>
              ))}
            </ul>
            </div>
          )}
        </div>
        <div className="prediction-container">
        <div className="selected-symptoms">
          <Typography variant="h5">Selected Symptoms:</Typography>
          <List>
            {symptoms.map(symptom => (
              <ListItem key={symptom}>
                <ListItemText primary={symptom} />
                <Button onClick={() => removeSymptom(symptom)}>&#10005;</Button>
              </ListItem>
            ))}
          </List>
        </div>
        <form onSubmit={handleSubmit}>
          <Button type="submit" variant="contained" color="primary">
            Predict
          </Button>
        </form>
        {prediction && (
          <div className="prediction-result">
            <Typography variant="h5" className="prediction-header">
              Prediction Result
            </Typography>
            <Typography variant="h6" className="predicted-disease">
              Predicted Disease: {prediction}
            </Typography>
          </div>
        )}
        {precautions.length > 0 && (
          <div className="precautions">
            <Typography variant="h5">Precautions:</Typography>
            <List>
              {precautions.map((precaution, index) => (
                <Card style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc', marginBottom: '10px' }} 
                key={index} className="precaution-card">
                <CardContent>
                  <Typography variant="body1">{precaution}</Typography>
                </CardContent>
              </Card>
              ))}
            </List>
          </div>
        )}
       
      </div>
      </div>
      <Footer className="footer"/>
      <ToastContainer />
    </div>
  );
}

export default SymptomForm;