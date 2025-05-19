import React, { useState } from 'react';
import { Baby, Users, Stethoscope, Heart } from 'lucide-react';
import Button from '../components/ui/Button';
import '../styles/AuthPage.css';

interface UserDetails {
  role: string | null;
  formData: Record<string, string>;
}

const AuthPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    role: null,
    formData: {}
  });

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setUserDetails(prev => ({
      ...prev,
      formData: {
        ...prev.formData,
        [e.target.name]: e.target.value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted details:', userDetails);
    // Handle form submission
  };

  const renderExpectantMotherForm = () => (
    <form onSubmit={handleSubmit} className="details-form">
      <h3>Tell us about yourself</h3>
      
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          min="18"
          max="50"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="weeksPregnant">How many weeks pregnant are you?</label>
        <input
          type="number"
          id="weeksPregnant"
          name="weeksPregnant"
          min="1"
          max="42"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="firstPregnancy">Is this your first pregnancy?</label>
        <select id="firstPregnancy" name="firstPregnancy" onChange={handleInputChange} required>
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="healthConditions">Any pre-existing health conditions?</label>
        <textarea
          id="healthConditions"
          name="healthConditions"
          onChange={handleInputChange}
          placeholder="Please list any health conditions..."
        />
      </div>

      <Button type="submit" variant="primary">Continue</Button>
    </form>
  );

  const renderPartnerForm = () => (
    <form onSubmit={handleSubmit} className="details-form">
      <h3>Partner Information</h3>
      
      <div className="form-group">
        <label htmlFor="partnerName">Your Full Name</label>
        <input
          type="text"
          id="partnerName"
          name="partnerName"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="relationship">Relationship to Expectant Mother</label>
        <select id="relationship" name="relationship" onChange={handleInputChange} required>
          <option value="">Select relationship</option>
          <option value="spouse">Spouse</option>
          <option value="partner">Partner</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="motherName">Expectant Mother's Name</label>
        <input
          type="text"
          id="motherName"
          name="motherName"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="availability">Your Availability</label>
        <select id="availability" name="availability" onChange={handleInputChange} required>
          <option value="">Select availability</option>
          <option value="fulltime">Stay-at-home partner</option>
          <option value="working">Working full-time</option>
          <option value="flexible">Flexible schedule</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="supportNeeds">How can we help you support your partner?</label>
        <textarea
          id="supportNeeds"
          name="supportNeeds"
          onChange={handleInputChange}
          placeholder="Tell us what you'd like to learn about..."
        />
      </div>

      <Button type="submit" variant="primary">Continue</Button>
    </form>
  );

  const renderHealthcareProviderForm = () => (
    <form onSubmit={handleSubmit} className="details-form">
      <h3>Healthcare Provider Information</h3>
      
      <div className="form-group">
        <label htmlFor="providerName">Full Name</label>
        <input
          type="text"
          id="providerName"
          name="providerName"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="specialization">Specialization</label>
        <select id="specialization" name="specialization" onChange={handleInputChange} required>
          <option value="">Select specialization</option>
          <option value="obgyn">OB/GYN</option>
          <option value="midwife">Midwife</option>
          <option value="nurse">Labor & Delivery Nurse</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="experience">Years of Experience</label>
        <input
          type="number"
          id="experience"
          name="experience"
          min="1"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="license">License/Registration Number</label>
        <input
          type="text"
          id="license"
          name="license"
          onChange={handleInputChange}
          required
        />
      </div>

      <Button type="submit" variant="primary">Continue</Button>
    </form>
  );

  const renderCaretakerForm = () => (
    <form onSubmit={handleSubmit} className="details-form">
      <h3>Professional Caretaker Information</h3>
      
      <div className="form-group">
        <label htmlFor="caretakerName">Full Name</label>
        <input
          type="text"
          id="caretakerName"
          name="caretakerName"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="certification">Certification Type</label>
        <select id="certification" name="certification" onChange={handleInputChange} required>
          <option value="">Select certification</option>
          <option value="doula">Certified Doula</option>
          <option value="childcare">Childcare Specialist</option>
          <option value="prenatal">Prenatal Care Specialist</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="services">Services Offered</label>
        <textarea
          id="services"
          name="services"
          onChange={handleInputChange}
          placeholder="List your specialized services..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="availability">Availability</label>
        <select id="availability" name="availability" onChange={handleInputChange} required>
          <option value="">Select availability</option>
          <option value="fulltime">Full-time</option>
          <option value="parttime">Part-time</option>
          <option value="oncall">On-call</option>
        </select>
      </div>

      <Button type="submit" variant="primary">Continue</Button>
    </form>
  );

  const renderForm = () => {
    switch (selectedRole) {
      case 'expectant-mother':
        return renderExpectantMotherForm();
      case 'partner':
        return renderPartnerForm();
      case 'healthcare-provider':
        return renderHealthcareProviderForm();
      case 'caretaker':
        return renderCaretakerForm();
      default:
        return null;
    }
  };

  return (
    <div className="auth-container">
      <div className="role-selection">
        {!selectedRole ? (
          <>
            <h2 className="role-title">Welcome to BirthWise</h2>
            <p className="role-subtitle">Please select your role to continue</p>
            
            <div className="role-grid">
              <button 
                className="role-card"
                onClick={() => handleRoleSelect('expectant-mother')}
              >
                <Baby className="role-icon" />
                <h3>Expectant Mother</h3>
                <p>Access personalized pregnancy tracking, health tips, and support resources</p>
              </button>

              <button 
                className="role-card"
                onClick={() => handleRoleSelect('partner')}
              >
                <Heart className="role-icon" />
                <h3>Partner</h3>
                <p>Learn how to support your loved one throughout the pregnancy journey</p>
              </button>

              <button 
                className="role-card"
                onClick={() => handleRoleSelect('healthcare-provider')}
              >
                <Stethoscope className="role-icon" />
                <h3>Healthcare Provider</h3>
                <p>Monitor patients, access medical resources, and provide expert care</p>
              </button>

              <button 
                className="role-card"
                onClick={() => handleRoleSelect('caretaker')}
              >
                <Users className="role-icon" />
                <h3>Professional Caretaker</h3>
                <p>Provide specialized support and care for expectant mothers</p>
              </button>
            </div>
          </>
        ) : (
          <div className="details-container">
            <button className="back-button" onClick={() => setSelectedRole(null)}>
              ← Back to role selection
            </button>
            {renderForm()}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;