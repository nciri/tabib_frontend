import SearchBar from '../components/homepage/SearchBar';
import HeroSection from '../components/homepage/HeroSection';
import SimpleDoctorCard from '../components/SimpleDoctorCard';

const HomePage = () => {
  const doctors = [
    {
      id: 2,
      name: 'Dr Michel Charbit',
      specialty: 'Gastro-entérologue et hépatologue',
      profileImage: 'https://via.placeholder.com/150', // Image par défaut
    },
    {
      id: 2,
      name: 'Dr Roxane Khayat',
      specialty: 'Dermatologue et vénérologue',
      profileImage: 'https://via.placeholder.com/150', // Image par défaut
    },
    {
      id: 2,
      name: 'Dr Bernard Peyronnet',
      specialty: 'Dermatologue et vénérologue',
      profileImage: 'https://via.placeholder.com/150', // Image par défaut
    },
    {
      id: 2,
      name: 'Dr Sophie Lambert',
      specialty: 'Cardiologue',
      profileImage: 'https://via.placeholder.com/150', // Image par défaut
    },
    {
      id: 2,
      name: 'Dr Jacques Dubois',
      specialty: 'Neurologue',
      profileImage: 'https://via.placeholder.com/150', // Image par défaut
    },
  ];
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Mes soignants</h2>
        <div className="simple-doctor-grid">
          {doctors.map((doctor, index) => (
            <SimpleDoctorCard key={index} {...doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
