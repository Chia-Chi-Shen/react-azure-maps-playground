import { AzureMap, AzureMapsProvider, AzureMapPopup, IAzureMapPopup } from 'react-azure-maps';
import { mapOptions } from '../../key';

const Popup = ({ isVisible, options }: IAzureMapPopup) => {
  // use position as argument would be better
  return (
    <AzureMapsProvider>
      <div style={{ width: '700px', height: '300px' }}>
        <AzureMap options={mapOptions}>
          <AzureMapPopup
            isVisible={isVisible}
            options={options}
            popupContent={<div style={{ padding: '20px' }}>Hello World</div>}
          />
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default Popup;
