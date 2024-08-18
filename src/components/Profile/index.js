import ProfileIcon from "../../assets/images/profile-icon.png"

export function Profile() {
    return (
        <div style={{ display: 'flex', width: '200px', alignItems: 'center', position: 'relative'}}>
            <div
                style={{
                    borderRadius: '50%',
                    border: '3px solid #c1c1c1',
                    width: '40px',
                    height: '40px'
                }}
            >
                <img src={ProfileIcon} alt="foto perfil" width={'40px'}/>
            </div>
            <p style={{fontSize: '20px', fontWeight: '400', marginLeft: '20px'}}>Olá, Natália!</p>
        </div>
    )
}