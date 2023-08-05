import React from "react";

const ColorTable = () => {
  return (
    <table className="w-full border-b-2">
      <thead className="bg-gray-800 text-white w-full uppercase">
        <tr className="h-12">
          <td></td>
          <td>xs</td>
          <td>s</td>
          <td>m</td>
          <td>l</td>
        </tr>
      </thead>
      <tbody className="w-full">
        <tr className="h-12">
          <td>Bust</td>
          <td>32</td>
          <td>33</td>
          <td>35</td>
          <td>37</td>
        </tr>
        <tr className="h-12 bg-gray-300">
          <td>Waist</td>
          <td>25</td>
          <td>26</td>
          <td>28</td>
          <td>30</td>
        </tr>
        <tr className="h-12">
          <td>Hip</td>
          <td>34</td>
          <td>35</td>
          <td>37</td>
          <td>39</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ColorTable;
