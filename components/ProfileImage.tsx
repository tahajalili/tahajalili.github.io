import Image from 'next/image';

const ProfileImage = (): JSX.Element => {
    
    return (
        

        <div>
            <Image
                className="select-none transition-all pointer-events-none"
                src="/images/me.jpg"                            
                draggable={false}
                alt="My profile image"
                width={260}
                height={260}/>

            <p className="text-xs text-gray-600 text-center">Having coffee at my fav spot in Ottawa.</p>

        </div>
    );
};

export default ProfileImage;
