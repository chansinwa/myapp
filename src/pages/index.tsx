import HelloWorldJpg from '../assets/HelloWorld.jpg';

export default function HomePage() {
  return (
    <div>
      {/* <h2>Yay! Welcome to umi!</h2> */}
      <h2>Hello World!</h2>
      <p>
        <img src={HelloWorldJpg} width="800" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
